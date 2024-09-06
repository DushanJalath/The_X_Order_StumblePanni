import os
from PyPDF2 import PdfReader
from langchain_openai import ChatOpenAI
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from core.config import settings



conversation_chain = None

print(settings.openai_api_key)

llm=ChatOpenAI(
            openai_api_key=settings.openai_api_key,
            model = 'gpt-3.5-turbo',
            temperature=0.5,
            max_tokens=500
)

llm_embeddings = HuggingFaceBgeEmbeddings(
    model_name='BAAI/bge-small-en-v1.5',
    model_kwargs={'device': 'cpu'},
    encode_kwargs={'normalize_embeddings': False}
)

def get_pdf_text(pdf_dir):
    pdf_docs = [os.path.join(pdf_dir, pdf) for pdf in os.listdir(pdf_dir)]
    text = ""
    for pdf in pdf_docs:
        try:
            pdf_reader = PdfReader(pdf)
            for page in pdf_reader.pages:
                text += page.extract_text()
        except Exception as e:
            print(f"Error reading {pdf}: {e}")
    return text


def chunk_text(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200
    )
    chunks = text_splitter.split_text(text)
    return chunks

def vect_store(chunks):
    # FAISS - FaceBook AI Similarity Search
    vectStore = FAISS.from_texts(
        texts=chunks,
        embedding=llm_embeddings
    )
    return vectStore

def data_pipeline(pdf_docs):
    text = get_pdf_text(pdf_docs)
    chunks = chunk_text(text)
    vectorstore = vect_store(chunks)
    print(vectorstore)
    return vectorstore

def get_conversation_chain(vectorstore):
    memory = ConversationBufferMemory(
        memory_key='chat_history',
        return_messages=True
    )
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain

def print_memory(conversation_chain):
    history = ""
    memory_elements = conversation_chain.memory.chat_memory
    for idx, element in enumerate(memory_elements.messages):
        message = element.content
        if idx % 2 == 0:
            history += f"user: {message}\n"
        else:
            history += f"bot: {message}\n\n"
    print(history)

def init_conversation_chain():
    global conversation_chain
    texts = get_pdf_text('./rag-knowledge-base/')
    chunks = chunk_text(texts)
    vectorStore = vect_store(chunks)
    conversation_chain = get_conversation_chain(vectorStore)

def run_conversation(message):
    global conversation_chain
    response = conversation_chain.run(message)
    print(f"User: {message}")
    print(f"Bot: {response}")
    return response

init_conversation_chain()