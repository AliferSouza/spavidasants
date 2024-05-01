export default async function login(props) {
    document.title = "LOGIN";
    const token = localStorage.getItem("authToken");

    const styles = `
        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .signup-container {
            display: none;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        } 

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button:hover {
            background-color: #0056b3;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .input-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #0056b3;
        }
 
    `;

    props.addEventListener("submit", async e => {
        e.preventDefault(); 
        const formData = Object.fromEntries(new FormData(e.target));
        try {
            const auth = getAuth(app);      
            const { email, password } = formData;
            if (token) {      
              const userCredential = await signInWithEmailAndPassword(auth, email, password);  
              const token = await userCredential.user.getIdToken();
              localStorage.setItem("authToken", token);
              $useNavigate("/");
            } else {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              const token = await userCredential.user.getIdToken();
              localStorage.setItem("authToken", token);
              $useNavigate("/");
            }
        } catch (error) {
            console.error("Erro:", error.message);
            $useNavigate("/");
        }
    });

  // Your existing dadosFirebase object
    const dadosFirebase = {
        token: "safdhjfdsfs212121525415",
        user: {
            name: "Alifer Souza",
            avatar: "urlimg",
            phone: 31993253883
        },
        Scheduling: [{
            professional: "Alifer Souza",
            specialties: "Massagem Relaxante",
            amount: 1,
            data: 190522,
            hours: 16,
        }],
    };



    return `   
            <menu-principal ></menu-principal>
            <style>${styles}</style>
            <div class="login-container">
                <h2>Login - Registro</h2>
                <form>
                    <div class="input-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div> 
              
        `;
    }

