import FacebookWidget from "./facebook-widget";

const Social = () => {
  return (
    <section className="py-8 bg-orange-50 text-center">
     <div className="container">
     <h3 className="text-3xl">Connect with us on social media!</h3>
      <p>
        Follow us on social media to stay updated on our latest events,
        festivals, and activities.
      </p>

      <div className="w-full mx-auto text-center py-8">
        <FacebookWidget />
      </div>
     </div>
    </section>
  );
};

export default Social;
