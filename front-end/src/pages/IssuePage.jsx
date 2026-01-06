import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function IssuePage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMail = () => {
    if (!message || !email) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: email,
      message: message,
    };

    emailjs
      .send("<SERVICE_ID>", "template_azmnoyw", templateParams, "<PUBLIC_KEY>")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setMessage("");
          setEmail("");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Gửi thất bại. Vui lòng thử lại!");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-start py-10 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-slate-900 dark:to-indigo-900 transition-colors duration-500">
      <div className="w-full max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600">
          Báo lỗi hoặc Góp ý
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          Sự đóng góp ý kiến từ các bạn là động lực giúp chúng tôi hoàn thiện sản phẩm ngày càng tốt hơn.
        </p>

        <div className="flex flex-col gap-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nhập phản hồi của bạn tại đây..."
            className="textarea textarea-bordered w-full h-40 resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-slate-600 transition-all"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email của bạn"
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-slate-600 transition-all"
          />
          <button
            onClick={sendMail}
            className="btn btn-primary mt-3 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Đang gửi..." : "Gửi ý kiến"}
            {!loading && <FontAwesomeIcon icon={faPaperPlane} />}
          </button>
        </div>

        {/* Modal */}
        {success && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 max-w-sm w-full text-center animate-fadeIn">
              <h3 className="text-xl font-bold mb-2 text-green-500">Gửi thành công 🥳</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cảm ơn bạn đã gửi góp ý/báo lỗi. Chúng tôi sẽ xem xét để sản phẩm ngày càng tốt hơn!
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="btn btn-success rounded-xl px-6 py-2 hover:scale-105 transition-transform"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IssuePage;
