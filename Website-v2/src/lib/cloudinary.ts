export function cloudinaryAuto(url: string): string {
  if (!url || !url.includes('res.cloudinary.com')) return url;
  return url.replace('/upload/', '/upload/f_auto,q_auto/if_ar_lt_1.0/c_scale,w_900/if_else/c_scale,h_900/if_end/');
}
