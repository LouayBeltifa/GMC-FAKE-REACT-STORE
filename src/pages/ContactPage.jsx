import ContactFormComponent from "../components/ContactFormComponent";

function ContactPage() {
  return (
    <div className="flex p-5 my-10">
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350389.5444325069!2d-74.30915841691113!3d40.697193362054165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e1!3m2!1sfr!2stn!4v1761943706143!5m2!1sfr!2stn"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold">Contact us</h2>
        <p className="text-sm text-emerald-500 mb-5">
          Send us a message, we will get back to you as soon as possible
        </p>

        <ContactFormComponent />
      </div>
    </div>
  );
}

export default ContactPage;
