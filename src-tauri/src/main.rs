// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/*
#[command]
fn app_close(app_handle: tauri::AppHandle) {
    let Some(window) = app_handle.get_window("main") else {
        return app_handle.exit(0);
    };
    app_handle.save_window_state(StateFlags::all()).ok(); // don't really care if it saves it

    if let Err(_) = window.close() {
        return app_handle.exit(0);
    }
}
 */

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

/* 창 크기 조정 부드럽게

window.on_window_event(|event| {
  match event {
      WindowEvent::Resized(..) => {
          std::thread::sleep(std::time::Duration::from_millis(1))
      }
      _ => {}
  }
});
*/
