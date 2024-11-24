package com.example.ultimo.ui.add_client;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.ultimo.R;

public class AddClient extends Fragment {

    private ImageView clientImage;
    private static final int REQUEST_CAMERA = 1;
    private static final int REQUEST_GALLERY = 2;

    public AddClient() {
        // Constructor público vacío requerido
    }

    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.activity_add_client, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        clientImage = view.findViewById(R.id.clientImage);
        Button changePhotoButton = view.findViewById(R.id.changePhotoButton);

        changePhotoButton.setOnClickListener(v -> {
            String[] options = {"Cámara", "Galería"};
            androidx.appcompat.app.AlertDialog.Builder builder = new androidx.appcompat.app.AlertDialog.Builder(requireContext());
            builder.setTitle("Cambiar Foto");
            builder.setItems(options, (dialog, which) -> {
                if (which == 0) {
                    openCamera();
                } else if (which == 1) {
                    openGallery();
                }
            });
            builder.show();
        });
    }

    private void openCamera() {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(intent, REQUEST_CAMERA);
    }

    private void openGallery() {
        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        startActivityForResult(intent, REQUEST_GALLERY);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (resultCode == Activity.RESULT_OK && data != null) {
            switch (requestCode) {
                case REQUEST_CAMERA:
                    Bitmap photo = (Bitmap) data.getExtras().get("data");
                    clientImage.setImageBitmap(photo);
                    break;
                case REQUEST_GALLERY:
                    Uri selectedImage = data.getData();
                    clientImage.setImageURI(selectedImage);
                    break;
            }
        }
    }
}
