using my.bookshop as my from '../db/data-model';

service CatalogService {
     entity Books as projection on my.Books;
     entity EMAIL as projection on my.CC_EMAIL;
}
