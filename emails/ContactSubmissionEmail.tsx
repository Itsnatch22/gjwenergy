import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type ContactSubmissionEmailProps = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  message: string;
};

const colors = {
  bone: "#F7F7F5",
  ochre: "#D97725",
  obsidian: "#0A0A0C",
  muted: "#686864",
  border: "#DEDED9",
};

export default function ContactSubmissionEmail({
  name,
  email,
  phone,
  company,
  service,
  message,
}: ContactSubmissionEmailProps) {
  const details = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Company", company],
    ["Service", service],
  ].filter(([, value]) => value);

  return (
    <Html>
      <Head />
      <Preview>New project enquiry from {name}</Preview>
      <Body style={{ margin: 0, backgroundColor: colors.bone, fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px" }}>
          <Section
            style={{
              backgroundColor: colors.obsidian,
              padding: "28px 32px",
              borderBottom: `4px solid ${colors.ochre}`,
            }}
          >
            <Text style={{ margin: 0, color: colors.ochre, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>
              GJW Energy · Project enquiry
            </Text>
            <Heading style={{ margin: "22px 0 0", color: "#FFFFFF", fontSize: "34px", lineHeight: "1", textTransform: "uppercase" }}>
              New conversation.
            </Heading>
          </Section>

          <Section style={{ backgroundColor: "#FFFFFF", padding: "32px" }}>
            <Text style={{ margin: "0 0 24px", color: colors.muted, fontSize: "15px", lineHeight: "1.6" }}>
              A new enquiry was submitted through the GJW Energy contact page.
            </Text>

            {details.map(([label, value]) => (
              <Section key={label} style={{ borderTop: `1px solid ${colors.border}`, padding: "14px 0" }}>
                <Text style={{ margin: 0, color: colors.ochre, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>
                  {label}
                </Text>
                <Text style={{ margin: "6px 0 0", color: colors.obsidian, fontSize: "15px", lineHeight: "1.5" }}>
                  {label === "Email" ? <Link href={`mailto:${value}`} style={{ color: colors.obsidian }}>{value}</Link> : value}
                </Text>
              </Section>
            ))}

            <Hr style={{ borderColor: colors.border, margin: "12px 0 24px" }} />
            <Text style={{ margin: 0, color: colors.ochre, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>
              Project details
            </Text>
            <Text style={{ margin: "10px 0 0", color: colors.obsidian, fontSize: "15px", lineHeight: "1.7", whiteSpace: "pre-wrap" }}>
              {message}
            </Text>
          </Section>

          <Text style={{ margin: "22px 0 0", color: colors.muted, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>
            Kenya · East Africa · gjwenergy.co.ke
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
