                sudo rm -rf /var/www/html/*
                sudo cp -r dist/* /var/www/html/
                sudo systemctl restart apache2



 2️⃣ Apache web root’ini tozalash
 
               sudo rm -rf /var/www/html/*


Diqqat: eski fayllar o‘chadi.

3️⃣ dist fayllarini web root’ga ko‘chirish

               sudo cp -r dist/* /var/www/html/


Shu bilan barcha optimizatsiya qilingan fayllar /var/www/html ga nusxalanadi.

4️⃣ .htaccess fallback yaratish

                /var/www/html ichida .htaccess yaratish:
                sudo touch /var/www/html/.htaccess
nano install

                sudo apt install nano -y

                sudo nano /var/www/html/.htaccess


Ichiga yozish:

                <IfModule mod_rewrite.c>
                  RewriteEngine On
                  RewriteBase /
                
                  # Fayl yoki papka topilmasa index.html ga yo'naltirish
                  RewriteCond %{REQUEST_FILENAME} !-f
                  RewriteCond %{REQUEST_FILENAME} !-d
                  RewriteRule . /index.html [L]
                </IfModule>
                
                
                Ctrl+O → Enter → Ctrl+X bilan saqlash va chiqish.

5️⃣ Apache konfiguratsiyasini tekshirish

                .htaccess ishlashi uchun AllowOverride yoqilgan bo‘lishi kerak:
                
                sudo nano /etc/apache2/sites-available/000-default.conf
                
                
                <VirtualHost *:80> ichida qo‘shing yoki tekshiring:
                
                <Directory /var/www/html>
                    AllowOverride All
                </Directory>
                
                
                Saqlash → chiqish.

6️⃣ mod_rewrite yoqish

                sudo a2enmod rewrite
                sudo systemctl restart apache2
