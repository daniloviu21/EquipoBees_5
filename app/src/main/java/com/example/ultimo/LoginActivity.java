package com.example.ultimo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

public class LoginActivity extends Activity {

    private EditText etUsername, etPassword;
    private Button btnLogin;
    private LinearLayout btnGoogleRegister; // Cambiado de Button a LinearLayout
    private TextView tvRegister, tvForgotPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // Inicializar los componentes de la interfaz
        etUsername = findViewById(R.id.etUsername);
        etPassword = findViewById(R.id.etPassword);
        btnLogin = findViewById(R.id.btnLogin);
        btnGoogleRegister = findViewById(R.id.btnGoogleRegister); // Ahora es un LinearLayout
        tvRegister = findViewById(R.id.tvRegister);
        tvForgotPassword = findViewById(R.id.tvForgotPassword);

        // Manejar el evento de clic en el botón de inicio de sesión
        btnLogin.setOnClickListener(v -> {
            String username = etUsername.getText().toString().trim();
            String password = etPassword.getText().toString().trim();

            if (username.isEmpty() || password.isEmpty()) {
                Toast.makeText(this, "Por favor, completa todos los campos", Toast.LENGTH_SHORT).show();
                return;
            }

            // Lógica de autenticación (simulada)
            if (username.equals("admin") && password.equals("1234")) {
                Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            } else {
                Toast.makeText(this, "Credenciales incorrectas", Toast.LENGTH_SHORT).show();
            }
        });

        // Manejar el evento de clic en el texto para registrarse
        tvRegister.setOnClickListener(v -> {
            Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
            startActivity(intent);
        });

        // Manejar el evento de clic en el botón de registro con Google
        btnGoogleRegister.setOnClickListener(v -> {
            // Aquí puedes agregar la lógica para inicio de sesión con Google
            Toast.makeText(this, "Función en desarrollo", Toast.LENGTH_SHORT).show();
        });

        // Manejar el evento de clic en el texto para recuperar contraseña
        tvForgotPassword.setOnClickListener(v -> {
            // Lógica para recuperación de contraseña
            Toast.makeText(this, "Función en desarrollo", Toast.LENGTH_SHORT).show();
        });
    }
}
