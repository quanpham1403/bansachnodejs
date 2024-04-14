import { useState } from "react";
import SettingSecurity from "./SettingSecurity";
import SettingUser from "./SettingUser";

const SettingProfile = () => {
    const [tabContent, setTabContent] = useState(1);
    const handleTabContent = (index) => {
        setTabContent(index)
    }
    return (
        <>
            <div className="p-5 w-[85%]">
                <h1 className="text-[#fff] text-[25px] font-semibold">Quản lí thông tin</h1>
                <div className="flex py-3 items-center gap-3 border-b border-[#3e3e3e] ">
                    <h2 className="text-[#fff] cursor-pointer" onClick={() => handleTabContent(1)}>Thông tin cá nhân</h2>
                    <h2 onClick={() => handleTabContent(2)} className="text-[#fff] cursor-pointer">Tài khoản bảo mật</h2>
                </div>
                <div>
                    {tabContent === 1 && <SettingUser />}
                    {tabContent === 2 && <SettingSecurity />}
                </div>
            </div>
        </>
    );
};

export default SettingProfile;