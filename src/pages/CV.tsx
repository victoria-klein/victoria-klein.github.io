
import MainLayout from "@/components/MainLayout";
import { Link } from "react-router-dom";

const CV = () => {
  return (
    <MainLayout>
      <div className="space-y-8 w-[600px]">
        <div className="space-y-2">
          <Link 
            to="/" 
            className="block text-primary hover:text-secondary font-courier text-2xl"
          >
            Home
          </Link>
          <Link 
            to="/cv" 
            className="block text-primary hover:text-secondary font-courier text-2xl"
          >
            CV
          </Link>
        </div>
        <section>
          <p className="text-gray-600">Coming Soon</p>
        </section>
      </div>
    </MainLayout>
  );
};

export default CV;
