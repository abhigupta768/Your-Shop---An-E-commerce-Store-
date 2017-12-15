from django.conf.urls import url
from . import views

app_name='app1'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<pk>[0-9]+)/$', views.detail, name='detail'),
    url(r'^category$', views.catview, name='catview'),
    url(r'^(?P<pk>[0-9]+)/cart$', views.cart, name='cart'),
    url(r'^cart/$', views.incart, name='incart'),
    url(r'^(?P<pk>[0-9]+)/rcart$', views.rcart, name='rcart'),
    url(r'^addItem$', views.AddItem.as_view(), name='addItem'),
    url(r'^review', views.GiveReview .as_view(), name='review'),
    url(r'^register/$', views.UserFormView.as_view(), name='register'),
    url(r'^logoutview/$', views.logout, name='logout'),
    url(r'^search/$', views.search, name='search'),
    url(r'^deliverydetails/$', views.deliverydetails, name='details'),
    url(r'^checkout/$', views.checkout, name='checkout'),
    url(r'^log/$', views.log, name='log'),
]

