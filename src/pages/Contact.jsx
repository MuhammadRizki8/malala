import ContactForm from '../components/Contact/ContactForm';
import Header from '../components/Header';
import ContactInfo from '../components/Contact/ContactInfo';
const Contact = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-gray-100">
      <Header backgroundImage="https://kenasih.com/luhanoq/2023/03/PDIKM.jpg" title="Kontak Kami" />
      {/* <ContactForm /> */}
      <div className="container max-w-7xl mx-auto py-8">
        <div className="px-4 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-6">
          <ContactForm />
          {/* <ContactForm /> */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
