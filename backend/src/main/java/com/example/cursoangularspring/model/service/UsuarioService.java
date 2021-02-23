package com.example.cursoangularspring.model.service;

import com.example.cursoangularspring.api.excpetion.NegocioException;
import com.example.cursoangularspring.model.entity.Usuario;
import com.example.cursoangularspring.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario){
       var user = usuarioRepository.findByUsuario(usuario.getUsuario());

       if(user.isPresent()){
           throw new NegocioException(usuario.getUsuario());
       }


       return usuarioRepository.save(usuario);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Usuario usuario = usuarioRepository.findByUsuario(username)
                .orElseThrow(() -> new UsernameNotFoundException("Login não encontrado"));

        return User
                .builder()
                .username(usuario.getUsuario())
                .password(usuario.getSenha())
                .roles("USER")
                .build();
    }
}
