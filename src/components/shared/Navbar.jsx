import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import { StateContext } from '../../context/StateProvider';

const navigation = [
  { name: 'Home', location: 'home' },
  { name: 'Orders', location: 'orders' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setLocation } = useContext(StateContext);

  return (
    <header className="bg-slate-50/20 backdrop-blur-md">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <button
            onClick={() => setLocation('home')}
            className="-m-1.5 p-1.5">
            <span className="sr-only">RayCube</span>
            <img
              className="h-8 w-auto"
              src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-cube-business-intelligence-becris-lineal-color-becris.png"
              alt="cube"
            />
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setLocation(`${item.location}`)}
              className="text-base font-semibold leading-6 text-gray-50 hover:text-slate-700">
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className="text-base font-semibold leading-6 text-gray-50 hover:text-slate-700">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-slate-50/20 backdrop-blur-md" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-slate-50/20 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setLocation('home')}
              className="-m-1.5 p-1.5">
              <span className="sr-only">RayCube</span>
              <img
                className="h-8 w-auto"
                src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-cube-business-intelligence-becris-lineal-color-becris.png"
                alt="cube"
              />
            </button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/60">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setLocation(`${item.location}`)}
                    className="-mx-3 w-full text-left block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  className="-mx-3 w-full text-left block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-700"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}