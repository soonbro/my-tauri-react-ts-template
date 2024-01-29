import DemoContainer from "@/components/Container";
import ReportAnIssue from "@/components/ReportForm";

const ReportTest = () => {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg md:p-1 md:grid lg:p-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <DemoContainer className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4">
        <ReportAnIssue></ReportAnIssue>
        <ReportAnIssue></ReportAnIssue>
      </DemoContainer>
    </div>
  );
};

export default ReportTest;
