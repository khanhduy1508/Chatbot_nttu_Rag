import robot_img from "../assets/logo_NTTU.png";
import { useState, useRef, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChatBot() {
  const messagesEndRef = useRef(null);
  const [promptInput, SetPromptInput] = useState("");
  const [selectedSource, setSelectedSource] = useState("nttu"); // Nguồn mặc định
  const [chatHistory, SetChatHistory] = useState([]);
  const [isLoading, SetIsLoad] = useState(false);
  const [isGen, SetIsGen] = useState(false);
  const [dataChat, SetDataChat] = useState([
    [
      "start",
      [
        "Xin chào! Đây là NTTU Chatbot, trợ lý đắc lực dành cho bạn! Bạn muốn tìm kiếm thông tin về những gì? 😄",
        null,
      ],
    ],
  ]);
  const [reference, SetReference] = useState({
    title: "",
    source: "",
    url: "",
    text: "",
  });

  const commonQuestions = [
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Bao nhiêu điểm thì học lực Giỏi?",
    "Bao nhiêu điểm thì học lực Khá?",
    "Điều kiện thực tập tốt nghiệp là gì?",
    "Học phần đã đăng ký có trạng thái N* là gì?",
    "Điều kiện nào để được xét chuyển trường?",
    "Lệ phí cấp bảng điểm là bao nhiêu?",
    "Nếu điểm thi kết thúc học phần < 4 thì như thế nào?",
    "Phí cấp lại thẻ sinh viên khi bị mất là bao nhiêu?",
    "Để đạt loại tốt điểm rèn luyện cần bao nhiêu điểm?",
    "Nếu sinh viên không đạt ở một học phần, phải làm gì?",
  ];

  useEffect(() => ScrollToEndChat(), [dataChat, isLoading]);

  function ScrollToEndChat() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const onChangeHandler = (event) => SetPromptInput(event.target.value);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      SendMessageChat();
    }
  };

  async function SendMessageChat() {
    if (!promptInput.trim() || isLoading) return;

    const question = promptInput.trim();
    SetPromptInput("");
    SetIsGen(true);
    SetIsLoad(true);

    // Thêm câu hỏi của user vào chat
    SetDataChat((prev) => [...prev, ["end", [question, selectedSource, new Date().toISOString()]]]);
    SetChatHistory((prev) => [question, ...prev]);

    try {
      const response = await fetch(
        `https://brusque-debera-exhaustive.ngrok-free.dev/rag/${selectedSource}?q=${encodeURIComponent(question)}`,
        {
          method: "GET",
          headers: { "ngrok-skip-browser-warning": "69420" },
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      const answer = result?.result || "Không tìm thấy câu trả lời";
      const sources = result?.source_documents || null;

      SetDataChat((prev) => [
        ...prev,
        ["start", [answer, sources, selectedSource, new Date().toISOString()]],
      ]);
    } catch (error) {
      console.error("Fetch error:", error);
      SetDataChat((prev) => [
        ...prev,
        ["start", ["Lỗi, không thể kết nối với server", null, selectedSource, new Date().toISOString()]],
      ]);
    } finally {
      SetIsLoad(false);
      SetIsGen(false);
    }
  }

  const handleReferenceClick = (sources, sourceType) => {
    SetReference({
      title:
        sourceType === "wiki"
          ? sources.metadata.title
          : sources.metadata.page === undefined
          ? "Sổ tay sinh viên 2023"
          : "Trang " + sources.metadata.page + " (sổ tay SV)",
      source: sourceType === "wiki" ? "Wikipedia" : "Đại học Nguyễn Tất Thành",
      url: sourceType === "wiki" ? sources.metadata.source : "https://ctsv.ntt.edu.vn/sinh-vien-can-biet/",
      text: sourceType === "wiki" ? sources.metadata.summary : sources.page_content,
    });
  };

  return (
    <div className="h-[85vh] px-2 md:px-4 py-3 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 dark:from-neutral-900 dark:via-slate-900 dark:to-neutral-950 text-slate-900 dark:text-slate-200">
      <div className="relative h-full flex gap-3 max-w-6xl mx-auto">

        {/* Sidebar trái */}
        <div className="hidden lg:flex flex-col w-64 shrink-0 gap-3 h-full">

          {/* Toggle nguồn */}
          <div className="flex gap-2 mb-2">
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${selectedSource === "nttu" ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-neutral-700 dark:text-white"}`}
              onClick={() => setSelectedSource("nttu")}
            >
              NTTU
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${selectedSource === "wiki" ? "bg-indigo-500 text-white" : "bg-slate-200 dark:bg-neutral-700 dark:text-white"}`}
              onClick={() => setSelectedSource("wiki")}
            >
              Wikipedia
            </button>
          </div>

          {/* Lịch sử chat */}
          <div className="flex-1 bg-white/90 dark:bg-neutral-900/90 border border-slate-200/70 dark:border-neutral-700/60 rounded-2xl p-4 shadow-lg overflow-hidden flex flex-col">
            <h2 className="font-semibold mb-2 text-sm tracking-wide bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Lịch sử trò chuyện</h2>
            <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              {chatHistory.length === 0 ? (
                <p className="text-xs text-gray-500 dark:text-gray-400">Chưa có cuộc hội thoại nào.</p>
              ) : (
                <ul className="space-y-1 text-xs">
                  {chatHistory.map((mess, i) => (
                    <li key={i} className="flex items-start gap-2 px-2 py-1 rounded-lg hover:bg-slate-100/80 dark:hover:bg-neutral-700/70 cursor-default">
                      <FontAwesomeIcon icon={faMessage} className="mt-[2px] text-sky-500 flex-none"/>
                      <p className="line-clamp-2">{mess.length < 40 ? mess : mess.slice(0, 40) + "..."}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Câu hỏi nhanh */}
          <div className="flex-1 bg-white/90 dark:bg-neutral-900/90 border border-slate-200/70 dark:border-neutral-700/60 rounded-2xl p-4 shadow-lg overflow-hidden flex flex-col">
            <h2 className="font-semibold mb-2 text-sm tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Câu hỏi nhanh</h2>
            <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-200">
                {commonQuestions.map((mess, i) => (
                  <li key={i}>
                    <button
                      className="w-full text-left flex items-start gap-2 px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-700"
                      onClick={() => SetPromptInput(mess)}
                    >
                      <FontAwesomeIcon icon={faMessage} className="mt-[2px] text-sky-500 flex-none"/>
                      <span className="leading-snug">{mess}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Chat chính */}
        <div className="flex-1 flex flex-col bg-white/95 dark:bg-neutral-900/80 rounded-3xl border border-slate-200/80 dark:border-neutral-700/70 shadow-[0_18px_45px_rgba(15,23,42,0.20)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)] overflow-hidden transition-colors duration-200">

          {/* Nội dung chat */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
            {dataChat.map((dataMessages, i) => {
              const type = dataMessages[0];
              const payload = dataMessages[1] || [];
              const text = payload[0] ?? "";
              const sources = payload[1] ?? null;
              const ts = payload[3];
              const timeStr = ts ? new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

              if (type === "start") {
                return (
                  <div key={i} className="flex items-start gap-3 animate-fadeIn">
                    <img src={robot_img} alt="NTTU" className="w-8 h-8 rounded-full mt-1 flex-none"/>
                    <div className="flex-1">
                      <div className="inline-block max-w-full bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm px-3 py-2 text-sm leading-relaxed shadow-md dark:bg-neutral-800/90 dark:border-neutral-700/80">
                        <TypeAnimation
                          style={{ whiteSpace: 'pre-line' }}
                          sequence={[text, () => SetIsGen(false)]}
                          cursor={false}
                          speed={40}
                        />
                      </div>

                      {sources && sources.length > 0 && (
                        <p className="font-semibold text-xs mt-1">
                          Tham khảo:{" "}
                          {sources.map((source, j) => (
                            <label
                              key={j}
                              htmlFor="my_modal_6"
                              className="kbd kbd-xs mr-1 hover:bg-sky-300 cursor-pointer"
                              onClick={() => handleReferenceClick(source, payload[2])}
                            >
                              {payload[2] === "wiki" ? source.metadata.title : source.metadata.page ? `Trang ${source.metadata.page}` : "Sổ tay sinh viên 2023"}
                            </label>
                          ))}
                        </p>
                      )}

                      <div className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">{timeStr}</div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={i} className="flex items-end justify-end gap-3 animate-fadeIn">
                  <div className="flex flex-col items-end">
                    <div className="inline-block max-w-full bg-sky-600 text-white rounded-2xl rounded-tr-sm px-3 py-2 text-sm leading-relaxed shadow-md">{text}</div>
                    <div className="mt-1 text-[10px] text-gray-500 dark:text-gray-400 text-right">{timeStr}</div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-3 animate-fadeIn">
                <img src={robot_img} alt="NTTU" className="w-8 h-8 rounded-full mt-1 flex-none"/>
                <div>
                  <div className="inline-block bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm px-3 py-2 shadow-md dark:bg-neutral-800/90 dark:border-neutral-700/80">
                    <ScaleLoader color="#38bdf8" loading={true} height={10} width={6}/>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer chat */}
          <div className="flex gap-2 items-end p-3 border-t border-slate-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-neutral-900/70">
            <textarea
              placeholder="Gõ câu hỏi... (Enter gửi, Shift+Enter xuống dòng)"
              className="w-full resize-none bg-slate-50 dark:bg-neutral-900/90 px-4 py-2 rounded-full text-sm text-slate-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-200"
              onChange={onChangeHandler}
              onKeyDown={handleKeyDown}
              onInput={(e) => { e.target.style.height="auto"; e.target.style.height=Math.min(e.target.scrollHeight,64)+"px"; }}
              disabled={isGen}
              value={promptInput}
              rows={1}
            />
            <button
              type="button"
              aria-label="Gửi"
              disabled={isGen || !promptInput.trim()}
              onClick={SendMessageChat}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-white text-lg animate-bounce-slow"/>
            </button>
          </div>
        </div>
      </div>

      {/* Modal tham khảo */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{reference.title}</h3>
          <p className="font-normal text-sm">Nguồn: {reference.source}</p>
          <p className="py-4 text-sm">{reference.text.slice(0, 700)}...</p>
          <p className="link link-primary truncate">
            <a href={reference.url} target="_blank" rel="noreferrer">{reference.url}</a>
          </p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-error">ĐÓNG</label>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.18s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-bounce-slow { animation: bounce 1.2s infinite; }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
      `}</style>
    </div>
  );
}

export default ChatBot;
