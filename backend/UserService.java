package com.vi.backend.service;

import com.vi.backend.model.User;
import java.util.List;

public interface UserService {
    // CRUD operation
    User createUser(User user);
    List<User> getAllUsers();
    User getUserById(Long id);
    User getUserByEmail(String email);
    User updateUser(Long id, User user);
    void deleteUser(Long id);

    // Auth
    User registerUser(User user);
    User loginUser(String email, String password);
}
