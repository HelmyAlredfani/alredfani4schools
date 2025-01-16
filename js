document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // بيانات تسجيل الدخول
  const adminCredentials = {
    username: "admin", // اسم المستخدم للإدمن
    password: "123456", // كلمة المرور للإدمن
  };

  if (role === "admin") {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      alert("Welcome Admin!");
      window.location.href = "admin.html";
    } else {
      alert("Invalid admin username or password!");
    }
  } else if (role === "student") {
    // اسم مستخدم وكلمة مرور افتراضية للطالب (اختياري)
    alert("Redirecting to Student Dashboard...");
    window.location.href = "student.html";
  } else {
    alert("Invalid role!");
  }
});
