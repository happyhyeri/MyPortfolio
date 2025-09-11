import ContactSection from './ContactMe';
import FeedbackSection from './FeedbackMe';
import '../../styles/contact.css';

export default function FinishPage() {
  
  const hyeriEmail = 'hyeri2007@gmail.com';

    const copyEmail = () => {
    navigator.clipboard.writeText(hyeriEmail).then(() => {
      alert('복사되었습니다.');
    });
  };
  return (
    <section id="finish">
      <div className="finish-container">
        <FeedbackSection hyeriEmail = {hyeriEmail} copyEmail = {copyEmail}></FeedbackSection>
        <ContactSection hyeriEmail = {hyeriEmail} copyEmail = {copyEmail}></ContactSection>
      </div>
    </section>
  );
}