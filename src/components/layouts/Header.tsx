import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { more_dropdown_item } from "../../data/Header";
import { Link, NavLink } from "react-router-dom";
import { jsonClassNames } from "../../static/utils/jsonClassNames";
import logo from "../../static/image/logo.png";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { walletType } from "application/context/reducer";

export default function Example() {
  const wallet = useSelector(
    (state: any) => state.globalState.wallet
  ) as walletType;
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">MetaConnect</span>
              <img className={styles.logo} src={logo} alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <NavLink
              to="/transaction"
              className={(props) =>
                `text-base font-medium hover:text-gray-900 ${
                  props.isActive ? styles.active_link : `text-gray-500`
                }`
              }
            >
              Send ETH
            </NavLink>
            <NavLink
              to="/search-wallet"
              className={(props) =>
                `text-base font-medium hover:text-gray-900 ${
                  props.isActive ? styles.active_link : `text-gray-500`
                }`
              }
            >
              Find Wallet
            </NavLink>
            <NavLink
              to="/about"
              className={(props) =>
                `text-base font-medium hover:text-gray-900 ${
                  props.isActive ? styles.active_link : `text-gray-500`
                }`
              }
            >
              About
            </NavLink>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={jsonClassNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={jsonClassNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {more_dropdown_item.map((item) => (
                            <a
                              target={"_blank"}
                              rel="noreferrer"
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://metamask.io"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              💰MetaMask
            </a>
            {wallet.address.length > 0 ? (
              <Link
                to="/connect"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:text-gray-100"
              >
                Connected !
              </Link>
            ) : (
              <Link
                to="/connect"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:text-gray-100"
              >
                Connect
              </Link>
            )}
          </div>
        </div>
      </div>
    </Popover>
  );
}
