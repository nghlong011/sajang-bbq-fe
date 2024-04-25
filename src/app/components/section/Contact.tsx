const Contact = () => {
  return (
    <div className="w-[90%] mx-auto mt-[80px] mb-[100px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d476648.5058218454!2d105.84497!3d21.040029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abba4b099afd%3A0x11ef3f804212a080!2zMjMgUC4gUGhhbiDEkMOsbmggUGjDuW5nLCBRdcOhbiBUaMOhbmgsIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1711383078758!5m2!1sen!2sus"
        width="75%"
        height="550"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute top-[10%] right-0 flex flex-col justify-center gap-[10px] py-[40px] w-[525px] bg-[#cb1411] text-white text-center">
        <p className="text-[35px] uppercase font-bold">LIÊN HỆ</p>
        <div className="text-base flex flex-col justify-center gap-[10px]">
          <p className="font-bold uppercase">SAJANG BBQ</p>
          <p>Địa chỉ: 23 Phan Đình Phùng, Ba Đình, Hà Nội</p>
          <p>Email: info@sajangbbq.com</p>
          <p>Tel: 0886 399 099</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
