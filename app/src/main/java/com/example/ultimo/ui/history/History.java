package com.example.ultimo.ui.history;


import androidx.fragment.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.ultimo.R;

public class History extends Fragment {
    public History() {
        // Constructor público vacío requerido
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Infla el layout del fragmento

        return inflater.inflate(R.layout.activity_history, container, false);
    }
}

