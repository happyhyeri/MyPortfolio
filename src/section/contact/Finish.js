import ContactSection from './ContactMe';
import FeedbackSection from './FeedbackMe';
import '../../styles/contact.css';

export default function FinishPage() {
  return (
    <section id="finish">
      <div className="finish-container">
        <FeedbackSection></FeedbackSection>
        <ContactSection></ContactSection>
      </div>
    </section>
  );
}