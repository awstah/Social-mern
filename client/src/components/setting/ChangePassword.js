import React, { useState } from "react";
import UserServices from "./../../services/UserServices";
import { useSelector } from "react-redux";

function ChangePassword() {
  const [form, setform] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  console.log(form);

  const userId = useSelector((state) => state.user.userId);

  const updatePasswordHandle = (e) => {
    e.preventDefault();
    if (form.newPassword === form.confirmNewPassword) {
      UserServices.updateProfile(form, userId).then((res) => {
        console.log(res);
      });
    }
  };

  const onHandleChange = (e) => {
    let value = e.target.value;
    setform({ ...form, [e.target.name]: value });
  };
  return (
    <div>
      <form className="space-y-4 max-w-sm" onSubmit={updatePasswordHandle}>
        <div className="input_container">
          <input
            name="newPassword"
            type="password"
            placeholder="New Password"
            value={form.newPassword}
            onChange={onHandleChange}
            className="input"
          />
        </div>
        <div className="input_container">
          <input
            name="confirmNewPassword"
            type="password"
            placeholder="Confirm New Password"
            value={form.confirmNewPassword}
            onChange={onHandleChange}
            className="input"
          />
        </div>
        <div>
          <button type="submit" className="block_btn">
            Change
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
