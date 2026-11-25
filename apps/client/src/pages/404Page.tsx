function NotFoundPage() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center px-6">
            <h1 className="text-2xl font-semibold">Page Not Found</h1>
            <button className="mt-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/80">
                <a href="/">Go Back Home</a>
            </button>
        </main>
    );
}

export default NotFoundPage;
