
import MainLayout from "@/components/MainLayout";
import { Link } from "react-router-dom";

const CV = () => {
  return (
    <MainLayout>
      <div className="space-y-8 w-[600px]">
        <div className="mb-4">
          <Link 
            to="/" 
            className="text-primary hover:text-secondary font-courier"
          >
            Home
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
