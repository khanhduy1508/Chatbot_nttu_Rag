import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const dataFAQs = [
  [
    "Chatbot hoạt động như thế nào?",
    "Chatbot giống như một trợ lý ảo: bạn hỏi, nó sẽ trả lời dựa trên dữ liệu đã học và thông tin sẵn có."
  ],
  [
    "Cách sử dụng chatbot để tra cứu thông tin",
    "Để sử dụng chatbot hiệu quả, bạn nên đặt câu hỏi rõ ràng, đầy đủ để mô hình có thể đưa ra câu trả lời chính xác. Trong một số trường hợp câu trả lời có thể không chính xác, nên kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần."
  ],
  [
    "Thông tin từ chatbot có đáng tin cậy không?",
    "Vì là mô hình xác suất, thông tin chatbot đưa ra có thể không chính xác trong một số trường hợp. Bạn nên kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần."
  ],
  [
    "Tôi có thể liên hệ hỗ trợ như thế nào?",
    "Bạn có thể liên hệ qua phần Góp ý/Báo lỗi hoặc phòng công tác sinh viên của trường."
  ],
];

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-[85vh] w-full flex justify-center items-start py-10 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-slate-900 dark:to-indigo-900 transition-colors duration-500">
      <div className="w-full max-w-3xl px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600">
          Những câu hỏi thường gặp (FAQs)
        </h1>

        {/* Accordion */}
        <div className="space-y-4">
          {dataFAQs.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-r hover:from-sky-50 hover:via-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:via-slate-800 dark:hover:to-indigo-900`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 dark:text-gray-200 focus:outline-none"
                >
                  {item[0]}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`ml-2 transform transition-transform duration-300 ${
                      isActive ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`px-6 text-gray-700 dark:text-gray-300 text-sm md:text-base transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  {item[1]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
