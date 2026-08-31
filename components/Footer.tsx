export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 font-bold">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Help Centre</li>
            <li>Payment Methods</li>
            <li>Shipping Information</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">ABOUT MYSHOP</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">FOLLOW US</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">PAYMENT</h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded border px-3 py-2 text-sm">
              GCash
            </span>
            <span className="rounded border px-3 py-2 text-sm">
              Maya
            </span>
            <span className="rounded border px-3 py-2 text-sm">
              Visa
            </span>
            <span className="rounded border px-3 py-2 text-sm">
              Mastercard
            </span>
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-sm text-gray-500">
        © 2026 MyShop. All Rights Reserved.
      </div>
    </footer>
  );
}