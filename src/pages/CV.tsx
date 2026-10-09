import MainLayout from "@/components/MainLayout";

const CV_PDF = "/VK_CV.pdf";

const CV = () => {
  return (
    <MainLayout>
      <div className="flex justify-end mb-2">
        <a
          href={CV_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="font-courier text-sm underline text-[#8B5CF6] hover:text-[#ea384c] transition-colors"
        >
          Open / download PDF
        </a>
      </div>
      {/* Mobile browsers often can't render PDFs inline; they get the fallback link instead. */}
      <object
        data={CV_PDF}
        type="application/pdf"
        className="w-full h-[calc(100dvh-140px)] lg:h-[calc(100dvh-252px)]"
      >
        <p className="font-courier text-sm text-gray-700 p-4">
          Your browser can't display the PDF here —{" "}
          <a href={CV_PDF} className="underline text-[#8B5CF6]">
            open my CV
          </a>{" "}
          instead.
        </p>
      </object>
    </MainLayout>
  );
};

export default CV;
