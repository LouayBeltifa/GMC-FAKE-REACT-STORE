import ButtonComponent from "./ButtonComponent";

function ContactFormComponent() {
  return (
    <form>
      <div className="flex flex-col my-2">
        <label htmlFor="FullName" className="mb-2">
          Full Name:
        </label>
        <input
          type="text"
          name="FullName"
          placeholder="eg:Jhon doe..."
          className="border-1 p-2 rounded"
        />
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="Email" className="mb-2">
          Email:
        </label>
        <input
          type="email"
          name="Email"
          placeholder="eg:jhon@gmail.com..."
          className="border-1 p-2 rounded"
        />
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="Subject" className="mb-2">
          Subject:
        </label>
        <input
          type="text"
          name="Subject"
          placeholder="eg:problem with my product..."
          className="border-1 p-2 rounded"
        />
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="Message" className="mb-2">
          Message:
        </label>
        <textarea
          type="text"
          name="Message"
          placeholder="eg:lorem etc..."
          className="border-1 p-2 rounded"
        />
      </div>
      <div className="mt-5 flex justify-end gap-5">
        <ButtonComponent title="Reset" />
        <ButtonComponent title="Send" />
      </div>
    </form>
  );
}

export default ContactFormComponent;
