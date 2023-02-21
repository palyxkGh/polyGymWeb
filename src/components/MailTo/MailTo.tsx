import * as React from "react";

type MailToProps = {
    email: string;
    subject: string;
    body: string;
    children: React.ReactNode;
}

const MailTo: React.FC<MailToProps> = ({email, subject, body, children }: MailToProps) => {
    return (
        <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>{children}</a>
    );
};

export default MailTo;
