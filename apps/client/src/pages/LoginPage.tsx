import { useNavigate } from 'react-router';

function LoginPage() {
  const navigate = useNavigate();

  return (
    
    <main className="flex flex-col min-h-screen items-center justify-center px-6">

      <h1 className="text-2xl font-semibold">Welcome back to Nexlect</h1>
      <button onClick={()=> navigate(-1)} className="mt-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/80 cursor-pointer">
        Go Back
        </button>
    
    </main>
    
  );
}

export default LoginPage;
