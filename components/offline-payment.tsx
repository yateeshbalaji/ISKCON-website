
import Image from "next/image";

type Props = {
  className?: string
}
const OfflinePayment: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`relative py-10 md:px-0 bg-white to-white min-h-[60vh] ${className || ""}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 tracking-tight">Offline Donations</h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl">
          For those who prefer to donate offline, you can contribute through cash or cheque at our temple office. Your support is invaluable and even a small donation can make a significant difference in our efforts to serve the community and promote spiritual welfare.
        </p>

        <div className="grid md:grid-cols-3 gap-0 items-stretch relative">
          {/* Bank Details Card */}
          <div className="flex flex-col justify-center px-4 md:px-0 py-4 md:py-0">
            <div className="mb-4">
              <div className="text-lg font-semibold text-slate-900 mb-2">Bank Transfer Details</div>
              <div className="space-y-2 text-base">
                <div><span className="font-semibold">Bank Name:</span> ICICI Bank</div>
                <div><span className="font-semibold">Account Name:</span> ISKCON</div>
                <div><span className="font-semibold">A/C No:</span> 402401000048</div>
                <div><span className="font-semibold">IFSC Code:</span> ICIC0004024</div>
              </div>
            </div>
          </div>

          {/* OR Separator */}
          <div className="flex flex-col items-center justify-center">
            <div className="hidden md:flex flex-col items-center h-full">
              <div className="w-px h-32 bg-slate-300 mb-2" />
              <span className="text-lg font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">OR</span>
              <div className="w-px h-32 bg-slate-300 mt-2" />
            </div>
            <div className="flex md:hidden items-center my-4">
              <div className="h-px w-12 bg-slate-300 mr-2" />
              <span className="text-base font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">OR</span>
              <div className="h-px w-12 bg-slate-300 ml-2" />
            </div>
          </div>

          {/* QR Code Card */}
          <div className="flex flex-col justify-center items-center px-4 md:px-0 py-4 md:py-0">
            <div className="text-lg font-semibold text-slate-900 mb-2 text-center">Scan and Pay</div>
            <div className="mb-4">
              <Image
                src="/images/namhatta-development-trust.png"
                width={220}
                height={220}
                alt="MS Namhatta Development Trust QR Code"
                className="rounded-lg shadow-md border border-slate-200"
              />
            </div>
            <div className="text-center text-sm text-slate-600">MS NAMHATTA DEVELOPMENT TRUST</div>
            <div className="text-center text-xs text-slate-500 mt-1">Scan and pay with any UPI app</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflinePayment;
