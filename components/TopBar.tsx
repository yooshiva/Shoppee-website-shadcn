export default function TopBar() {
  return (
    <div className="bg-[#ee4d2d] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        
        <div className="flex items-center gap-4">
          <span>Seller Centre</span>
          <span>|</span>
          <span>Start Selling</span>
          <span>|</span>
          <span>Download</span>
          <span>|</span>
          <span>Follow Us</span>
        </div>

        <div className="flex items-center gap-4">
          <span>🔔 Notifications</span>
          <span>❓ Help</span>
          <span>🌐 English</span>
          <span>👤 Account</span>
        </div>

      </div>
    </div>
  );
}