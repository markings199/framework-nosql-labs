export async function api(path, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }

  return res.json();
}