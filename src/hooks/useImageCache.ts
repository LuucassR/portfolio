const imageCache = new Map<string, Promise<HTMLImageElement>>();

export function preloadImage(src: string): Promise<HTMLImageElement> {
  if (imageCache.has(src)) {
    return imageCache.get(src)!;
  }

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve(img);
    };
    
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });

  imageCache.set(src, promise);
  return promise;
}

export function preloadImages(srcs: string[]): Promise<HTMLImageElement[]> {
  return Promise.allSettled(srcs.map(preloadImage)).then(
    (results) => results
      .filter((result): result is PromiseFulfilledResult<HTMLImageElement> => result.status === 'fulfilled')
      .map(result => result.value)
  );
}

export function clearImageCache(): void {
  imageCache.clear();
}
