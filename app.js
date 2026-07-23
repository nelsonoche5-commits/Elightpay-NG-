const supabaseUrl = "https://avprmuydtwcnvbqzvtct.supabase.co";
const supabaseKey = "sb_publishable_2Xvf3bbcfZC-YkRptjeavg_STPeXWTH";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

document.getElementById("signupBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    message.innerText = error.message;
  } else {
    message.innerText =
      "Account created successfully! Check your email to verify your account.";
  }
});
