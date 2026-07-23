const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_PUBLISHABLE_KEY";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

document.getElementById("signupBtn").addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    message.innerText = error.message;
  } else {
    message.innerText = "Account created successfully!";
  }

});
