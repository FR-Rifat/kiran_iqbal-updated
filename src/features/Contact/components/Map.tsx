

const Map = () => {
  return (
    <div className="container bg-[#E6F5E6] mx-auto py-10 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39910.74279322371!2d-82.65282545482007!3d27.85146244404821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6ec0faaa749%3A0xc3d55dd203467003!2sSt.%20Petersburg%2C%20FL%2033702%2C%20USA!5e0!3m2!1sen!2sbd!4v1788174268665!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="A&R Auto Parts Location"
      />
    </div>
  );
};

export default Map;


