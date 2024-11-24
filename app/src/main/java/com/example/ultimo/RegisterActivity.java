package com.example.ultimo;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextWatcher;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.ultimo.LoginActivity;
import com.example.ultimo.R;

public class RegisterActivity extends AppCompatActivity {

    private EditText etFullName, etLastNamePaterno, etLastNameMaterno, etPhone, etEmail, etPasswordRegister, etConfirmPassword;
    private Button btnRegister, btnGoogleRegister;
    private TextView tvLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        // Inicialización de los elementos del layout
        initializeUI();

        // Configurar TextWatcher para el campo de teléfono
        setPhoneFieldWatcher();

        // Configurar acciones de los botones
        configureButtonActions();
    }

    private void initializeUI() {
        etFullName = findViewById(R.id.etFullName);
        etLastNamePaterno = findViewById(R.id.etLastNamePaterno);
        etLastNameMaterno = findViewById(R.id.etLastNameMaterno);
        etPhone = findViewById(R.id.etPhone);
        etEmail = findViewById(R.id.etEmail);
        etPasswordRegister = findViewById(R.id.etPasswordRegister);
        etConfirmPassword = findViewById(R.id.etConfirmPassword);
        btnRegister = findViewById(R.id.btnRegister);
        btnGoogleRegister = findViewById(R.id.btnGoogleRegister);
        tvLogin = findViewById(R.id.tvLogin);
    }

    private void setPhoneFieldWatcher() {
        etPhone.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (s.length() > 10) {
                    etPhone.setError("El teléfono debe tener máximo 10 dígitos");
                }
            }

            @Override
            public void afterTextChanged(Editable s) {}
        });
    }

    private void configureButtonActions() {
        btnRegister.setOnClickListener(v -> registerUser());
        btnGoogleRegister.setOnClickListener(v -> {
            // Aquí puedes agregar lógica para registro con Google
        });
        tvLogin.setOnClickListener(v -> {
            Intent intent = new Intent(RegisterActivity.this, LoginActivity.class);
            startActivity(intent);
        });
    }

    private void registerUser() {
        String fullName = etFullName.getText().toString().trim();
        String lastNamePaterno = etLastNamePaterno.getText().toString().trim();
        String lastNameMaterno = etLastNameMaterno.getText().toString().trim();
        String phone = etPhone.getText().toString().trim();
        String email = etEmail.getText().toString().trim();
        String password = etPasswordRegister.getText().toString().trim();
        String confirmPassword = etConfirmPassword.getText().toString().trim();

        // Validaciones
        if (!validateFields(fullName, lastNamePaterno, lastNameMaterno, phone, email, password, confirmPassword)) {
            return;
        }

        // Registro exitoso
        Intent intent = new Intent(RegisterActivity.this, LoginActivity.class);
        startActivity(intent);
        finish();
    }

    private boolean validateFields(String fullName, String lastNamePaterno, String lastNameMaterno, String phone, String email, String password, String confirmPassword) {
        if (fullName.isEmpty()) {
            etFullName.setError("El nombre es obligatorio");
            return false;
        }
        if (lastNamePaterno.isEmpty()) {
            etLastNamePaterno.setError("El apellido paterno es obligatorio");
            return false;
        }
        if (lastNameMaterno.isEmpty()) {
            etLastNameMaterno.setError("El apellido materno es obligatorio");
            return false;
        }
        if (phone.isEmpty() || phone.length() != 10) {
            etPhone.setError("El teléfono debe tener 10 dígitos");
            return false;
        }
        if (email.isEmpty() || !email.endsWith("@gmail.com")) {
            etEmail.setError("El correo debe ser de Gmail (@gmail.com)");
            return false;
        }
        if (password.isEmpty()) {
            etPasswordRegister.setError("La contraseña es obligatoria");
            return false;
        }
        if (!password.equals(confirmPassword)) {
            etConfirmPassword.setError("Las contraseñas no coinciden");
            return false;
        }
        return true;
    }
}