import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faBookOpen, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({
  chatHistory = [],
  sourceData,
  setSourceData,
  commonQuestions = [],
  onQuickQuestion,
}) {
  return (
    <aside className="hidden lg:block w-64 space-y-4">
      {/* Lịch sử trò chuyện */}
      <div className="glass-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faClockRotateLeft} className="text-indigo-500 text-xs" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-slate-900">Lịch sử trò chuyện</h4>
              <p className="text-[11px] text-slate-500">Những câu bạn vừa hỏi gần đây</p>
            </div>
          </div>
        </div>

        {chatHistory.length === 0 ? (
          <p className="text-sm text-gray-500">Chưa có cuộc hội thoại nào.</p>
        ) : (
          <ul className="space-y-1 text-xs mt-1 max-h-40 overflow-auto pr-1">
            {chatHistory.map((h, i) => (
              <li
                key={i}
                className="truncate px-2 py-1 rounded-md hover:bg-slate-50 cursor-default border border-transparent hover:border-slate-100"
                title={h}
              >
                {h.length <= 32 ? h : h.slice(0, 32) + "..."}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Nguồn + câu hỏi nhanh */}
      <div className="glass-card rounded-2xl p-4">
        {/* Nguồn tham khảo */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faBookOpen} className="text-sky-500 text-xs" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-slate-900">Nguồn tham khảo</h4>
              <p className="text-[11px] text-slate-500">Chọn nơi chatbot lấy dữ liệu</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <label className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
            <span>Wikipedia</span>
            <input
              type="radio"
              name="src"
              value="wiki"
              checked={sourceData === "wiki"}
              onChange={(e) => setSourceData(e.target.value)}
              className="radio radio-sm checked:bg-blue-500"
            />
          </label>

          <label className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
            <span>ĐH Nguyễn Tất Thành</span>
            <input
              type="radio"
              name="src"
              value="nttu"
              checked={sourceData === "nttu"}
              onChange={(e) => setSourceData(e.target.value)}
              className="radio radio-sm checked:bg-blue-500"
            />
          </label>
        </div>

        {/* Câu hỏi nhanh */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faBolt} className="text-amber-500 text-xs" />
            </div>
            <h5 className="font-semibold text-xs text-slate-800 uppercase tracking-wide">
              Câu hỏi nhanh
            </h5>
          </div>
          <div className="flex flex-wrap gap-2">
            {commonQuestions.slice(0, 6).map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onQuickQuestion && onQuickQuestion(q)}
                className="text-[11px] px-3 py-1 rounded-full border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 transition-colors duration-150 text-left"
              >
                {q}
              </button>
            ))}
            {commonQuestions.length === 0 && (
              <p className="text-xs text-slate-400">Chưa có câu hỏi gợi ý.</p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
