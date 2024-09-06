import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(2)  # Simulates waiting for a network request
    print("Data fetched!")

async def log_data():
    print("Logging data...")
    await asyncio.sleep(1)  # Simulates a delay in logging
    print("Data logged!")

async def main():
    task1 = asyncio.create_task(fetch_data())  # This starts an async task
    task2 = asyncio.create_task(log_data())    # Another task runs in parallel
    print("Tasks started!")
    await task2
    print("Both tasks completed!")
    await task1  # Waits for both tasks to complete
    print("Task 2 completed!")

asyncio.run(main())
