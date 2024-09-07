"use client";

import React, { useState, useEffect } from "react";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
	const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
	const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);

	const toggleMenu = (menu: "user" | "settings") => {
		if (menu === "user") {
			setShowUserMenu(!showUserMenu);
			setShowSettingsMenu(false);
		} else if (menu === "settings") {
			setShowSettingsMenu(!showSettingsMenu);
			setShowUserMenu(false);
		}
	};

	useEffect(() => {
		const closeMenus = (e: MouseEvent) => {
			if (!(e.target as HTMLElement).closest(".menu-container")) {
				setShowUserMenu(false);
				setShowSettingsMenu(false);
			}
		};

		document.addEventListener("click", closeMenus);
		return () => document.removeEventListener("click", closeMenus);
	}, []);

	return (
		<header className='bg-white shadow'>
			<div className='container mx-auto px-4 py-2 flex justify-between items-center'>
				<div className='flex items-center'>
					<Link
						href='/'
						className='text-xl font-bold'>
						💰 Asset Manager
					</Link>
				</div>
				<div className='flex items-center space-x-4'>
					<div className='relative menu-container'>
						<button
							onClick={() => toggleMenu("settings")}
							className='p-2'>
							<Settings />
						</button>
						{showSettingsMenu && (
							<div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
								<Link
									href='/budget'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>
									予算管理
								</Link>
							</div>
						)}
					</div>
					<div className='relative menu-container'>
						<button
							onClick={() => toggleMenu("user")}
							className='p-2'>
							<User />
						</button>
						{showUserMenu && (
							<div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
								<button
									onClick={() => {
										/* Implement logout logic */
									}}
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>
									<LogOut
										className='inline mr-2'
										size={16}
									/>
									ログアウト
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
