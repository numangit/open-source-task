/* eslint-disable react/prop-types */
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { Fragment, useContext, useState } from 'react';
import { StateContext } from '../../context/StateProvider';


const Modal = ({ product }) => {

  let [isOpen, setModal] = useState(false);
  const { setOrders } = useContext(StateContext);
  const [deliveryType, setDeliveryType] = useState('');

  function closeModal() {
    setModal(false);
    Object.assign(product, { deliveryType });
    setOrders((prev) => [...prev, product]);
  }

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="btn btn-sm bg-indigo-400 px-3 py-2 rounded-md text-white ">
        Order now
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          {/* {/ modal data /} */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Choose delivery option
                  </Dialog.Title>
                  {/* {/ main data /} */}
                  <RadioGroup value={deliveryType} onChange={setDeliveryType}>
                    <RadioGroup.Label>Plan</RadioGroup.Label>
                    <RadioGroup.Option value="Regular Delivery">
                      {({ checked }) => (
                        <span className={checked ? 'bg-blue-200' : ''}>Regular Delivery</span>
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Express Delivery">
                      {({ checked }) => (
                        <span className={checked ? 'bg-blue-200' : ''}>Express Delivery</span>
                      )}
                    </RadioGroup.Option>
                  </RadioGroup>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Place Order
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>

            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;