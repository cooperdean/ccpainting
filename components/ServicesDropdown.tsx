import { Menu } from "@headlessui/react"
import { ChevronDown } from "lucide-react"

export default function ServicesDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-1 py-2 text-white hover:text-emerald-600 transition-colors">
        Services
        <ChevronDown className="h-4 w-4" />
      </Menu.Button>

      <Menu.Items className="absolute z-50 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/interior-painting"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Interior Painting
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/exterior-painting"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Exterior Painting
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/commercial-painting"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Commercial Painting
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/drywall-repair"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Drywall Repair & Installation
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/texturing-stippling"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Texturing & Stippling
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/cabinet-painting"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Cabinet Painting
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/property-maintenance"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Property Maintenance
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/color-consultation"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Color Consultation
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/staining"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100 text-emerald-600" : "text-gray-700"
                }`}
              >
                Staining
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}