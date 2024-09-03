import ContactForm from '../components/Contact/ContactSection';
import Header from '../components/Header';
const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
      <Header backgroundImage="https://kenasih.com/luhanoq/2023/03/PDIKM.jpg" title="Kontak Kami" />
      <ContactForm />
    </div>
  );
};

export default Contact;
