import MainLayout from "@/components/MainLayout";

const CV = () => {
  return (
    <MainLayout>
      <div className="w-full" style={{ height: "calc(100vh - 100px)" }}>
        <embed
          src="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </MainLayout>
  );
};

export default CV;
