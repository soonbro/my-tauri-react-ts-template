import { Mail } from "@/pages/mail/components/mail";
import { accounts, mails } from "@/pages/mail/data";

export default function MailPage() {
  const layout = localStorage.getItem("react-resizable-panels:layout");
  const collapsed = localStorage.getItem("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : undefined;

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
