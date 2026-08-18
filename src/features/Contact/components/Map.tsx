

const Map = () => {
  return (
    <div className="container mx-auto py-10 overflow-hidden rounded-2xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.016883835292!2d-95.5442889237871!3d29.736489633094738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c33de4000001%3A0x3cf5e704cc4c40c5!2s9801%20Westheimer%20Rd%20Ste%20444%2C%20Houston%2C%20TX%2077042%2C%20USA!5e1!3m2!1sen!2sbd!4v1787068783895!5m2!1sen!2sbd"
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


